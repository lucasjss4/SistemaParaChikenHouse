
import org.junit.Test;
import static org.junit.Assert.*;

public class testeDecisaoDeHorario {

    public class decidirHorario {

        public boolean verificarEstadoDaLuz(int horarioDeLigar, int horarioDeDesligar, int horarioSimulado) {

            if (horarioSimulado >= horarioDeLigar && horarioSimulado <= horarioDeDesligar) {
                return true;
            } else {
                return false;
            }

        }
    }

    @Test
    public void decicaoHorario() {
        int horarioDeLigar = 6, horarioDeDesligar = 18, horarioSimulado = 15;
        decidirHorario estado = new decidirHorario();

        assertEquals(true, estado.verificarEstadoDaLuz(horarioDeLigar, horarioDeDesligar, horarioSimulado));
    }

}


