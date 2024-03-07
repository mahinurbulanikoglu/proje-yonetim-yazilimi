package com.vtys.ProjeOdevi.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtTokenFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // Burada JWT doğrulama mantığı implemente edilecek
        // Örneğin, isteğin header'ında gelen bir JWT'yi kontrol edebilirsiniz.

        // Eğer JWT geçerli ise, kimlik doğrulama yapılabilir:
        // Authentication authentication = ...

        // SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }
}

