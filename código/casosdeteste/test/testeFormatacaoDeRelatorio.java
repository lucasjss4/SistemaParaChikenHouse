import org.junit.Test;
import static org.junit.Assert.*;

public class testeFormatacaoDeRelatorio {
 
    public class formatarRelatorio{
        
        public String gerarLinhaDeRelatorio(String data, int racaoGasta){
            
            String linha = "LOG: " + data + " | " + "CONSUMO: " + racaoGasta;
            
            return linha;
            
        } 
        
    }
    
    @Test
    public void testarLog(){
        
        String data = "25/11/2025";
        int racaoGasta = 50;
        
        formatarRelatorio formatacao = new formatarRelatorio();
        
        
        assertEquals("LOG: " + data + " | " + "CONSUMO: " + racaoGasta, formatacao.gerarLinhaDeRelatorio(data, racaoGasta));
        
    }
    
}
