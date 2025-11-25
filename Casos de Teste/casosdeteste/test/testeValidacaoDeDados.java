import org.junit.Test;
import static org.junit.Assert.*;

public class testeValidacaoDeDados {
    
    public class validarGalinha{
        
        public boolean valoresAbsurdos(int quantidadeDeGalinhas){
            
            if(quantidadeDeGalinhas < 0){
                return false;
            }else{
                return true;
            }
            
        }
    }
    
    
    @Test
    public void validacao(){
        int qtdGalinhas = -50;
        validarGalinha validar = new validarGalinha();
        
        assertEquals(false, validar.valoresAbsurdos(qtdGalinhas));
    }
    
}
