
import org.junit.Test;
import static org.junit.Assert.*;

public class testeHorarioRacao {

    public class Agendador {

        public boolean ehHoraDeComer(String horaAtual) {
            // Vamos supor que os horários fixos sejam 08:00 e 12:00
            if (horaAtual.equals("08:00") || horaAtual.equals("12:00")) {
                return true;
            }
            return false;
        }
    }

    @Test
    public void testarSeEhHoraDeComer() {
        String relogioAgora = "12:00";

        Agendador agendador = new Agendador();

        // Deve retornar TRUE pois 12:00 é um horário válido
        assertEquals(true, agendador.ehHoraDeComer(relogioAgora));
    }
}
