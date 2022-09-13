import { TestBed } from '@angular/core/testing';

import { SearchResolverResolver } from './search-resolver.resolver';

describe('SearchResolverResolver', () => {
  let resolver: SearchResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SearchResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
