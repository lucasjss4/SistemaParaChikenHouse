/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sistemaparachickenhouse;

/**
 *
 * @author lucas
 */
public class Estoque {

    // Simula a atualização do banco de dados
    public int atualizarSaldo(int saldoAtual, int alteracao) {
        return saldoAtual + alteracao; // Se alteração for negativa, ele subtrai
    }
}
