package com.example.bookmarkerapi.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {

    @Query("select new com.example.bookmarkerapi.domain.BookmarkDTO(b.id,b.title,b.url,b.createdAt) from Bookmark  b")
    Page<BookmarkDTO> findBookmarks(Pageable pageable);

    @Query("""
    select new com.example.bookmarkerapi.domain.BookmarkDTO(b.id,b.title,b.url,b.createdAt) from Bookmark  b
    where lower(b.title) like lower(concat('%',:query,'%'))
    """)
    Page<BookmarkDTO> serachBookmarks(String query,Pageable pageable);

    Page<BookmarkDTO> findByTitleContainsIgnoreCase(String query,Pageable pageable);

    //Interface based projection
    //Page<BookmarkVM> findByTitleContainsIgnoreCase(String query,Pageable pageable);
}
