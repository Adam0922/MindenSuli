using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeloToltes
{
    internal class telephone
    {
        public string tszam = string.Empty;
        public int penz = 0;

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
