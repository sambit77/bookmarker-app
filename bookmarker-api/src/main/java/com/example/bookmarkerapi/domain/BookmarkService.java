package com.example.bookmarkerapi.domain;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BookmarkService {

    private final  BookmarkRepository repository;


    //@Transactional(readOnly = true)
    public BookmarksDTO getBookmarks(Integer page) {
        int pageNo = page < 1 ? 0 : page-1;
        Pageable pageable = PageRequest.of(pageNo,5, Sort.Direction.DESC,"createdAt");
        Page<BookmarkDTO> returnedPage= repository.findBookmarks(pageable);
        return new BookmarksDTO(returnedPage);
    }

    public BookmarksDTO searchBookmarks(String query,Integer page) {
        int pageNo = page < 1 ? 0 : page-1;
        Pageable pageable = PageRequest.of(pageNo,5, Sort.Direction.DESC,"createdAt");
        //Page<BookmarkDTO> returnedPage= repository.serachBookmarks(query,pageable);
        Page<BookmarkDTO> returnedPage= repository.findByTitleContainsIgnoreCase(query,pageable);

        //Interface based DB projection
        //Page<BookmarkVM> returnedPageInterfaceMapping= repository.findByTitleContainsIgnoreCase(query,pageable);
        return new BookmarksDTO(returnedPage);
    }
}
