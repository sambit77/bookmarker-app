package com.example.bookmarkerapi.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateBookmarkRequest {

    @NotEmpty(message = "title can not be empty")
    private String title;
    @NotEmpty(message = "url can not be empty")
    private String url;
}
