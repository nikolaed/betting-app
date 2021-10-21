package com.sports.betting.configuration;

import org.slf4j.MDC;
import org.springframework.context.annotation.Configuration;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.UUID;

@Configuration
public class MDCFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws IOException, ServletException {
        try {
            MDC.put(SportsConstants.CORRELATION_ID, getCorrelationId());
            response.addHeader("txId", MDC.get(SportsConstants.CORRELATION_ID));
            filterChain.doFilter(request, response);
        } finally {
            MDC.remove(SportsConstants.CORRELATION_ID);
        }
    }

    private String getCorrelationId() {
        return UUID.randomUUID().toString();
    }
}