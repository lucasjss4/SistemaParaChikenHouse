import org.junit.Test;
import static org.junit.Assert.*;

public class testeSimulacaoDoSensorDeLuz {
    
    public class SimuladorDeIntensidadeDeLuz{
        
        public int simulador(int meta_luz, int leituraSimulada){
            
            return meta_luz - leituraSimulada;
            
        }
        
    }
    
    @Test
    public void CalculadoraDeSimulaçãoDeLuz(){
        
        int meta_luz = 25, leituraSimulada = 15;
        
        SimuladorDeIntensidadeDeLuz simulacao = new SimuladorDeIntensidadeDeLuz();
        
        assertEquals(10, simulacao.simulador(meta_luz, leituraSimulada));
    }
    
}
