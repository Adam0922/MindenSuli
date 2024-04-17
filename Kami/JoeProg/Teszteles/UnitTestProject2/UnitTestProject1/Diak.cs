using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTestProject1
{
    using NUnit.Framework;

    public class diak
    {
        public bool AgeTestDiak(int a)
        {
            if (a < 18)
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
