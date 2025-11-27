import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.FormatarRelatorio;

public class testeFormatacaoDeRelatorio {
 
    @Test
    public void testarLog(){
        
        String data = "25/11/2025";
        int racaoGasta = 50;
        
        FormatarRelatorio formatacao = new FormatarRelatorio();
        
        
        assertEquals("LOG: " + data + " | " + "CONSUMO: " + racaoGasta, formatacao.gerarLinhaDeRelatorio(data, racaoGasta));
        
    }
    
}
