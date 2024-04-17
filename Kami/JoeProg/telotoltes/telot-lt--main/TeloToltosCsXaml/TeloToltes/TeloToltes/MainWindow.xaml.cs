using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace TeloToltes
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        telephone tel = new telephone();
        public MainWindow()
        {
            InitializeComponent();
        }

        private void resetbtn_Click(object sender, RoutedEventArgs e)
        {
            tszambe.Text = "";
            penzbe.Text = "";
        }

        private void feltoltbtn_Click(object sender, RoutedEventArgs e)
        {
            if (tszambe.Text != "" & penzbe.Text != "")
            {
                tel.tszam = tszambe.Text;
                if (tel.Tszamell(tel.tszam))
                {
                    if (tel.Egyenlegell(Int32.Parse(penzbe.Text)))
                    {
                        tel.penz += Int32.Parse(penzbe.Text);
                        MessageBox.Show("Sikeres feltöltés!");
                    }
                    else
                    {
                        MessageBox.Show("Sikertelen feltöltés!");
                    }
                }
                else
                {
                    MessageBox.Show("A telefonszámnak 11 karakternek kell lennie!");
                }
            }
            else
            {
                MessageBox.Show("Nem lehet üres mező!");
            }
        }

        private void lekerbtn_Click(object sender, RoutedEventArgs e)
        {
            if (tel.Tszamell(tel.tszam))
            {
                egyenlegOUT.Content = tel.penz.ToString() + "Ft";
            }
            else
            {
                MessageBox.Show("Nem lehet üres a telefonszám mező!");
            }
        }
    }
}
