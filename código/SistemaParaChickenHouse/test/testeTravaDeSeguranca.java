import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.ValidadorRacao;

public class testeTravaDeSeguranca {
    
    @Test
    public void testarBloqueioDeValorAlto() {
        double valorAbsurdo = 1500.0; // Alguém digitou errado
        
        ValidadorRacao validador = new ValidadorRacao();
        
        // Esperamos FALSE, pois 1500 é maior que o limite de 200
        assertEquals(false, validador.ehQuantidadeSegura(valorAbsurdo));
    }
    
}
