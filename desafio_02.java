package com.kevenkni;

import java.util.Scanner;

public class desafio_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite um número: ");
        int n = scanner.nextInt();
        int a = 0, b = 1, c = 0;

        while (c < n) {
            c = a + b;
            a = b;
            b = c;
        }
        if (c == n) {
            System.out.println("O número " + n + " pertence a sequência de Fibonacci.");
        } else {
            System.out.println("O número " + n + " não pertence a sequência de Fibonacci.");
        }

        scanner.close();
    }
}
