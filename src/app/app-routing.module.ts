import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResolverResolver } from './shared/resolvers/search-resolver.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SearchResolverResolver]
})
export class AppRoutingModule { }
