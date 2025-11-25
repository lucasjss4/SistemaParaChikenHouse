import org.junit.Test;
import static org.junit.Assert.*;

public class testeTravaDeSeguranca {
    
    public class ValidadorRacao {
        // Retorna TRUE se for seguro, FALSE se for perigoso
        public boolean ehQuantidadeSegura(double quantidade) {
            double limiteMaximo = 200.0; // Limite de 200g por galinha
            if (quantidade > limiteMaximo) {
                return false; 
            }
            return true;
        } 
    }
    
    @Test
    public void testarBloqueioDeValorAlto() {
        double valorAbsurdo = 1500.0; // Alguém digitou errado
        
        ValidadorRacao validador = new ValidadorRacao();
        
        // Esperamos FALSE, pois 1500 é maior que o limite de 200
        assertEquals(false, validador.ehQuantidadeSegura(valorAbsurdo));
    }
    
}
