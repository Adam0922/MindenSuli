using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTestProject1
{
    using NUnit.Framework;
    [TestClass]


    public class Test1
    {
        diak tanulo = new diak();
        [TestMethod]


        public void Diak()
        {
            Assert.IsTrue(tanulo.AgeTestDiak(17));
        }

        Auto tavolsag = new Auto();
        [TestMethod]

        public void Auto()
        {
            Assert.IsTrue(tavolsag.Tank(12));
        }
    }


}
