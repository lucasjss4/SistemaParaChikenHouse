
import org.junit.Test;
import static org.junit.Assert.*;
import sistemaparachickenhouse.Agendador;

public class testeHorarioRacao {

    @Test
    public void testarSeEhHoraDeComer() {
        String relogioAgora = "12:00";

        Agendador agendador = new Agendador();

        // Deve retornar TRUE pois 12:00 é um horário válido
        assertEquals(true, agendador.ehHoraDeComer(relogioAgora));
    }
}
