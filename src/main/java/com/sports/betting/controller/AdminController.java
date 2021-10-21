package com.sports.betting.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.concurrent.*;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@RestController
public class AdminController {

    @RequestMapping(value = "/threads")
    public void testThreads(){
        int[] a = new int[1000000];
        for(int i=0;i<1000000;i++){
            a[i] = i;
        }

        ExecutorService executorService = Executors.newFixedThreadPool(5);

//        List<Future<String>> list = new ArrayList<Future<String>>();



        for(int i=0;i<a.length;i+=100){

            List<Future<String>> list = new ArrayList<Future<String>>();

            for(int j=0;j<100;j++){

                Future future = executorService.submit(new Callable<String>() {
                    public String call() throws InterruptedException {
                        Thread.sleep(500);
                        return Thread.currentThread().getName();
                    }
                });

                list.add(future);

            }


            for(Future<String> fut : list){
                try {
                    System.out.println(new Date()+ "::"+fut.get());
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
            }

            //executorService.shutdown();
            System.out.println("Serie finished");

        }


    }



    @RequestMapping(value = "/threads2")
    public void testThreads2() throws InterruptedException, ExecutionException {

        int[] a = new int[1000000];
        for(int i=0;i<1000000;i++){
            a[i] = i;
        }


        ExecutorService executorService = Executors.newFixedThreadPool(5);


        List<Callable<String>> tasks = null;

        for(int i=0;i<a.length;i+=100){

            tasks = new ArrayList<>();

            for(int j=0;j<100;j++){

                tasks.add( () -> {
                    Thread.sleep(500);
                    return Thread.currentThread().getName();
                });

            }

            List<Future<String>> futures = executorService.invokeAll(tasks);

            for(Future<String> future : futures){
                System.out.println(new Date()+ "::"+future.get());
            }

            System.out.println("Serie finished");

        }




    }


    @RequestMapping(value = "/threads3")
    public void testThreads3() throws InterruptedException {

        int[] a = new int[1000000];
        for(int i=0;i<1000000;i++){
            a[i] = i;
        }


        ExecutorService executorService = Executors.newFixedThreadPool(5);

        for(int i=0;i<a.length;i+=100){

            for(int j=0;j<100;j++){
                executorService.execute(new Task());
            }

            executorService.awaitTermination(5, TimeUnit.SECONDS);
            System.out.println("Serie finished");
        }


    }

    static class Task implements Runnable {
        public void run(){
            System.out.println("Thread name: " + Thread.currentThread().getName());
        }
    }



}
