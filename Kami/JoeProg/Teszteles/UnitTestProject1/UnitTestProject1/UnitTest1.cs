using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTestProject1
{
    using NUnit.Framework;

    public class Calculator
    {
        public int Add(int a, int b)
        {
            return a + b;
        }

        public int Subtract(int a, int b)
        {
            return a - b;
        }

        public double Division(int a, int b)
        {
            return (double)(a / b);
        }

        public double Multiply(int a, int b)
        {
            return a * b;
        }
    }
    [TestFixture]
    public class UnitTest1
    {
        [Test]
        public void TestMethod1()
        {
            Calculator calc = new Calculator();
            Assert.That(calc.Add(1, 2), Is.EqualTo(3));
        }

        [Test]
        public void TestMethod2()
        {
            Calculator calc = new Calculator();
            Assert.That(calc.Subtract(1, 2), Is.EqualTo(-1));
        }

        [Test]
        public void TestMethod3()
        {
            Calculator calc = new Calculator();
            Assert.That(calc.Division(4, 2), Is.EqualTo(2));
        }

        [Test]
        public void TestMethod4()
        {
            Calculator calc = new Calculator();
            Assert.That(calc.Multiply(4, 2), Is.EqualTo(8));
        }

        public class Password
        {
            public int PassText(string s)
            {
                return s.Length;
            }
            public Boolean PassInNumber(string s)
            {
                return s.Contains("@");
            }
        }

        public class PasswordTests
        {
            [Test]
            public void LengthPassText()
            {
                Password password = new Password();
                int hossz = password.PassText("alma");
                Assert.That(hossz, Is.EqualTo(4));
            }

            [Test]
            public void PassInNumberText()
            {
                Password password = new Password();
                Boolean van = password.PassInNumber("alma@");
                Assert.AreEqual(true, van);
            }

        }

    }
}