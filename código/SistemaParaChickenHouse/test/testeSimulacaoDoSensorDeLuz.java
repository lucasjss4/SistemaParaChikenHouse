import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.SimuladorDeIntensidadeDeLuz;

public class testeSimulacaoDoSensorDeLuz {
    
    @Test
    public void CalculadoraDeSimulaçãoDeLuz(){
        
        int meta_luz = 25, leituraSimulada = 15;
        
        SimuladorDeIntensidadeDeLuz simulacao = new SimuladorDeIntensidadeDeLuz();
        
        assertEquals(10, simulacao.simulador(meta_luz, leituraSimulada));
    }
    
}
