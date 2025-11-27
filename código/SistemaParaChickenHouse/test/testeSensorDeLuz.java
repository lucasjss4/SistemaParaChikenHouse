
import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.DiagnosticoSensor;

public class testeSensorDeLuz {

    @Test
    public void testarFalhaNoSensor() {
        int leituraDoSensor = -10; // Valor impossível

        DiagnosticoSensor diagnostico = new DiagnosticoSensor();

        assertEquals("ERRO CRITICO", diagnostico.verificarStatus(leituraDoSensor));
    }
}
