import org.junit.Test;
import static org.junit.Assert.*;

public class testeSensorDeLuz {
    
    public class DiagnosticoSensor {
        public String verificarStatus(int leituraLux) {
            if (leituraLux < 0) {
                return "ERRO CRITICO"; // Não existe luz negativa
            }
            return "OK";
        } 
    }
    
    @Test
    public void testarFalhaNoSensor() {
        int leituraDoSensor = -10; // Valor impossível
        
        DiagnosticoSensor diagnostico = new DiagnosticoSensor();
        
        assertEquals("ERRO CRITICO", diagnostico.verificarStatus(leituraDoSensor));
    }
}
