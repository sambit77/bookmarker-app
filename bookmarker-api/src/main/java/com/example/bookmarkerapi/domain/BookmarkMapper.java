package com.example.bookmarkerapi.domain;

import org.springframework.stereotype.Component;

@Component
public class BookmarkMapper {
    public BookmarkDTO toBookmarkDTO(Bookmark bookmark)
    {
        return new BookmarkDTO(bookmark.getId(), bookmark.getTitle(),bookmark.getUrl(),bookmark.getCreatedAt());
    }
}
