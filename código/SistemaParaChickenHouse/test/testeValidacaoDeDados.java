import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.ValidarGalinha;

public class testeValidacaoDeDados {

    @Test
    public void validacao(){
        int qtdGalinhas = -50;
        ValidarGalinha validar = new ValidarGalinha();
        
        assertEquals(false, validar.valoresAbsurdos(qtdGalinhas));
    }
    
}
