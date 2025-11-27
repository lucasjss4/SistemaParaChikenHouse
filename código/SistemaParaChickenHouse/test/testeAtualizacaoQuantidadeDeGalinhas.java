import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.Estoque;

public class testeAtualizacaoQuantidadeDeGalinhas {
    
    @Test
    public void testarAtualizacaoEstoque() {
        int saldoAtual = 100;
        int galinhasMortas = -5; // Número negativo representa saída
        
        Estoque meuEstoque = new Estoque();
        
        // Esperamos que 100 + (-5) resulte em 95
        assertEquals(95, meuEstoque.atualizarSaldo(saldoAtual, galinhasMortas));
    }
}
