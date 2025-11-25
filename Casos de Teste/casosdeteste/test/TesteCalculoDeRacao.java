import org.junit.Test;
import static org.junit.Assert.*;

public class testeCalculoDeRacao {
    
    public class calculoDeRacaoPorGalinha {
        
        private static final double FATOR_CONSUMO = 0.07;
        
        public double calcular(int quantidadeDeGalinhas, double pesoMedio){
   
            double consumoPorAve = pesoMedio * FATOR_CONSUMO;
            
            double totalRacao = consumoPorAve * quantidadeDeGalinhas;
            
            return totalRacao;
        }
    }
    
    @Test
    public void CalcularRacao(){
        int quantidadeDeGalinhas = 100;
        double pesoMedio = 1.5;
        calculoDeRacaoPorGalinha rcGalinha = new calculoDeRacaoPorGalinha();
        assertEquals(10.5, rcGalinha.calcular(quantidadeDeGalinhas, pesoMedio), 0.1);
    }
    
}
