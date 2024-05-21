package com.example.bookmarkerapi.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Setter
@Getter
public class BookmarksDTO {
    private List<BookmarkDTO> data;
    private Long totalElements;
    private int totalPages;
    private int currentPage;
    @JsonProperty("isFirst")
    private boolean isFirst;
    @JsonProperty("isLast")
    private boolean isLast;
    private boolean hasPrevious;
    private  boolean hasNext;

    public BookmarksDTO(Page<BookmarkDTO> bookmarkPage)
    {
        this.setData(bookmarkPage.getContent());
        this.setTotalElements(bookmarkPage.getTotalElements());
        this.setTotalPages(bookmarkPage.getTotalPages());
        this.setCurrentPage(bookmarkPage.getNumber()+1);
        this.setFirst(bookmarkPage.isFirst());
        this.setLast(bookmarkPage.isLast());
        this.setHasPrevious(bookmarkPage.hasPrevious());
        this.setHasNext(bookmarkPage.hasNext());

    }

}
