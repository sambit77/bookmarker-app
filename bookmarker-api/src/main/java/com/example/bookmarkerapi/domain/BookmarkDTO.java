package com.example.bookmarkerapi.domain;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BookmarkDTO {
    private  Long id;
    private String title;
    private String url;
    private Instant createdAt;
}
