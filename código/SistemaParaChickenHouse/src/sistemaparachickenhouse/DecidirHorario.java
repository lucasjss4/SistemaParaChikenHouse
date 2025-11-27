package sistemaparachickenhouse;

public class DecidirHorario {

    public boolean verificarEstadoDaLuz(int horarioDeLigar, int horarioDeDesligar, int horarioSimulado) {

        if (horarioSimulado >= horarioDeLigar && horarioSimulado <= horarioDeDesligar) {
            return true;
        } else {
            return false;
        }

    }
}
