package sistemaparachickenhouse;

public class ValidadorRacao {

    public boolean ehQuantidadeSegura(double quantidade) {
        double limiteMaximo = 200.0; // Limite de 200g por galinha
        if (quantidade > limiteMaximo) {
            return false;
        }
        return true;
    }
}
