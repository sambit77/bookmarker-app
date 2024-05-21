package com.example.bookmarkerapi.domain;

import java.time.Instant;

//Interface based DB projectins example
public interface BookmarkVM {
    Long getId();
    String gettitle();
    String getUrl();
    Instant getCreatedAt();
}
