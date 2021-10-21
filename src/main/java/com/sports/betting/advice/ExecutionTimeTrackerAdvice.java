package com.sports.betting.advice;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ExecutionTimeTrackerAdvice {

    Logger logger = LoggerFactory.getLogger(ExecutionTimeTrackerAdvice.class);

    @Pointcut(value = "execution(* com.sports.betting.controller.*.*(..) ) || execution(* com.sports.betting.dao.*.*(..) )" +
            "|| execution(* com.sports.betting.service.*.*(..) ) || execution(* com.sports.betting.domain.*.*(..) )")
    public void myPointcut(){

    }

    @Around("myPointcut()")
    public Object trackTime(ProceedingJoinPoint pjp) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object obj = pjp.proceed();
        long endTime = System.currentTimeMillis();
        logger.info("Method name"+pjp.getSignature()+" time taken to execute : "+(endTime-startTime));
        return obj;
    }
}
