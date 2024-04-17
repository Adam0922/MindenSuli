using NUnit.Framework;

namespace teloszamtesztcucc
{
    public class Tests
    {
        [Test]
        public void Tszamell_ValidInput_ReturnsTrue()
        {
            string tszam = "12345678901";
            bool result = Tszamell(tszam);
            Assert.That(result, Is.EqualTo(true));
        }

        [Test]
        public void Tszamell_InvalidInput_ReturnsFalse()
        {
            string tszam = "123456";
            bool result = Tszamell(tszam);
            Assert.That(result, Is.EqualTo(false));
        }

        [Test]
        public void Egyenlegell_ValidInput_ReturnsTrue()
        {
            int penz = 3000;
            bool result = Egyenlegell(penz);
            Assert.That(result, Is.EqualTo(true));
        }

        [Test]
        public void Egyenlegell_InvalidInput_ReturnsFalse()
        {
            int penz = 1000;
            bool result = Egyenlegell(penz);
            Assert.That(result, Is.EqualTo(false));
        }

        public bool Tszamell(string tszam)
        {
            if (tszam.Length == 11)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Egyenlegell(int penz)
        {
            if (penz == 3000 || penz == 5000 || penz == 7000)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
