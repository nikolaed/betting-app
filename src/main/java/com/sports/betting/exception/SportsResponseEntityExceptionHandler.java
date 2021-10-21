package com.sports.betting.exception;

import com.sports.betting.configuration.SportsConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class SportsResponseEntityExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(SportsResponseEntityExceptionHandler.class);

    @ExceptionHandler(SportsException.class)
    @ResponseBody
    public ResponseEntity<ErrorResponse> handleSportsException(SportsException exception) {
        ErrorResponse errorResponse = new ErrorResponse();
        String transactionId = MDC.get(SportsConstants.CORRELATION_ID);
        if (exception.getCulprit() != null) {
            errorResponse.withHttpStatus(exception.getCulprit().getHttpStatusCode());
            switch(exception.getCulprit().getHttpStatusCode()) {
                case 500 :
                    LOGGER.error("Exception raised -> handleSportsException ", exception);
                    break;
                default:
                    logExceptionAsWarn(exception);
                    break;
            }
        } else {
            errorResponse.withHttpStatus(SportsException.Culprit.INTERNAL_ERROR.getHttpStatusCode());
            LOGGER.error("Exception raised -> handleSportsException ", exception);
        }
        errorResponse.withErrorDescription(exception.getMessage()).withTransactionId(transactionId);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(errorResponse, httpHeaders,
                HttpStatus.valueOf(errorResponse.getHttpStatus()));
    }

    protected void logExceptionAsWarn(Exception ex) {
        if (ex != null) {
            StackTraceElement[] stack = ex.getStackTrace();
            StringBuilder buf = new StringBuilder();
            buf.append(ex.toString().concat(" <--logExceptionAsWarn--> "));
            for (int x = 0; x < 1; x++) {
                buf.append(stack[x].toString());
            }
            //Changing it is debug, as these log's other than 500 is not adding value's
            if (LOGGER.isDebugEnabled())
                LOGGER.debug(buf.toString());
        }
    }
}
