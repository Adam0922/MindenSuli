using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTestProject1
{
    using NUnit.Framework;

    public class Auto
    {
        int fogy = 4;
        int tank = 50;
        public bool Tank(int a)
        { 

            if (a * fogy < tank)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }
}
