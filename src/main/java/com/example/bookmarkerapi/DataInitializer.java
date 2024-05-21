package com.example.bookmarkerapi;

import com.example.bookmarkerapi.domain.Bookmark;
import com.example.bookmarkerapi.domain.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Comment;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final BookmarkRepository repository;
    @Override
    public void run(String... args) throws Exception {
        //Data will be initialized from db.migrations using flyway
//        repository.save(new Bookmark(null,"Sambit Github","https://github.com/sambit77", Instant.now()));
//        repository.save(new Bookmark(null,"stackoverflow","https://stackoverflow.com/questions/24006937/lombok-annotations-do-not-compile-under-intellij-idea", Instant.now()));
//        repository.save(new Bookmark(null,"Spring Initializer","https://start.spring.io/", Instant.now()));
//        repository.save(new Bookmark(null,"Geektrust","https://www.geektrust.com/dashboard", Instant.now()));
//        repository.save(new Bookmark(null,"Youtube","https://www.youtube.com/watch?v=UhEMh-HZIMY&list=PLuNxlOYbv61h66_QlcjCEkVAj6RdeplJJ&index=3", Instant.now()));
//        repository.save(new Bookmark(null,"Linkedin","https://www.linkedin.com/in/sambit77/", Instant.now()));
//        repository.save(new Bookmark(null,"Sam Portfolio","https://sambit-pradhan.netlify.app/", Instant.now()));
//        repository.save(new Bookmark(null,"Sam Hackerrank","https://www.hackerrank.com/profile/sambit7", Instant.now()));
//        repository.save(new Bookmark(null,"Crio","https://www.crio.do/learn/track/TRACK_FELLOWSHIP_ADVANCED_BACKEND/", Instant.now()));

    }
}
