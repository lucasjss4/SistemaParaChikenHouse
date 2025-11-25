
import org.junit.Test;
import static org.junit.Assert.*;

public class testeAcumuladorConsumo {

    public class RelatorioFinanceiro {

        public double somarConsumoDia(double acumuladoAnterior, double novoConsumo) {
            return acumuladoAnterior + novoConsumo;
        }
    }

    @Test
    public void testarSomaDeConsumo() {
        double jaGastoHoje = 10.5;
        double gastoAgora = 5.0;

        RelatorioFinanceiro relatorio = new RelatorioFinanceiro();

        // 10.5 + 5.0 deve ser 15.5. O 0.001 é a margem de erro para números quebrados
        assertEquals(15.5, relatorio.somarConsumoDia(jaGastoHoje, gastoAgora), 0.001);
    }
}
