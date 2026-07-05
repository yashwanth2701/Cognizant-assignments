import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AAATest {

    private int number;

    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAAAPattern() {

        int expected = 20;

        int result = number * 2;

        assertEquals(expected, result);
    }
}