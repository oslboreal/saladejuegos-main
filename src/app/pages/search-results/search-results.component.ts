import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/shared/models/post';
import { SanitizeUrlPipe } from 'src/app/shared/pipes/sanitize-url.pipe';
import { SearchResolverResolver } from 'src/app/shared/resolvers/search-resolver.resolver';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: []
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public searchResults: Observable<Post[]>;
  searchText: string = '';
  showingResultsCount: number = 0;

  constructor(
    private postsService: PostsService,
    private safePipe: SanitizeUrlPipe,
    private activatedRoute: ActivatedRoute
  ) {
    /* Get search value from path */
    activatedRoute.paramMap.subscribe((data) => {
      if (data.has('searchValue'))
        this.searchText = data.get('searchValue') || '';
    });

    /* Set observable */
    this.searchResults = this.postsService.getSearchPosts(this.searchText); // This method should be modified to get partial data
    this.searchResults.subscribe((x) => { this.showingResultsCount = x.length; })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
