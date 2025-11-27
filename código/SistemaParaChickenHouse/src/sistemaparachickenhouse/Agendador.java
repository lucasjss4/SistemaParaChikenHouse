package sistemaparachickenhouse;

public class Agendador {

    public boolean ehHoraDeComer(String horaAtual) {
        // Vamos supor que os horários fixos sejam 08:00 e 12:00
        if (horaAtual.equals("08:00") || horaAtual.equals("12:00")) {
            return true;
        }
        return false;
    }
}
