
import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.CalculoDeRacaoPorGalinha;

public class testeCalculoDeRacao {

    @Test
    public void CalcularRacao() {
        int quantidadeDeGalinhas = 100;
        double pesoMedio = 1.5;
        CalculoDeRacaoPorGalinha rcGalinha = new CalculoDeRacaoPorGalinha();
        assertEquals(10.5, rcGalinha.calcular(quantidadeDeGalinhas, pesoMedio), 0.1);
    }

}
