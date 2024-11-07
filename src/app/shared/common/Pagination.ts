export interface IPagination {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  setPage(page: number): void;
}

export class Pagination implements IPagination {
  pageNo: number;
  pageSize: number;
  totalCount: number;

  constructor(pageNo: number = 1,pageSize: number = 10, totalCount: number = 0) {
    this.pageSize = pageSize;
    this.totalCount = totalCount;
    this.pageNo = pageNo;
  }

  setPage(page: number): void {
      this.pageNo = page+ 1;
  }
}
