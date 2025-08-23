import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export function BlogPagination() {
  return (
    <div className="mt-12 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}