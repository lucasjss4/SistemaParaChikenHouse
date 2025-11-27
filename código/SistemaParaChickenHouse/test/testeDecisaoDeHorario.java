
import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.DecidirHorario;

public class testeDecisaoDeHorario {

    @Test
    public void decicaoHorario() {
        int horarioDeLigar = 6, horarioDeDesligar = 18, horarioSimulado = 15;
        DecidirHorario estado = new DecidirHorario();

        assertEquals(true, estado.verificarEstadoDaLuz(horarioDeLigar, horarioDeDesligar, horarioSimulado));
    }

}


