package sistemaparachickenhouse;

public class CalculoDeRacaoPorGalinha {

    private static final double FATOR_CONSUMO = 0.07;

    public double calcular(int quantidadeDeGalinhas, double pesoMedio) {

        double consumoPorAve = pesoMedio * FATOR_CONSUMO;

        double totalRacao = consumoPorAve * quantidadeDeGalinhas;

        return totalRacao;
    }
}
