import org.junit.Test;
import static org.junit.Assert.*;

public class testeAtualizacaoQuantidadeDeGalinhas {
    
    public class Estoque {
        // Simula a atualização do banco de dados
        public int atualizarSaldo(int saldoAtual, int alteracao) {
            return saldoAtual + alteracao; // Se alteração for negativa, ele subtrai
        } 
    }
    
    @Test
    public void testarAtualizacaoEstoque() {
        int saldoAtual = 100;
        int galinhasMortas = -5; // Número negativo representa saída
        
        Estoque meuEstoque = new Estoque();
        
        // Esperamos que 100 + (-5) resulte em 95
        assertEquals(95, meuEstoque.atualizarSaldo(saldoAtual, galinhasMortas));
    }
}
