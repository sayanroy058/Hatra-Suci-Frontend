import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlockchainBackground from '@/components/BlockchainBackground';
import { Building2, Gem, Leaf, TrendingUp, Shield, Globe, ArrowRight, Users, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <BlockchainBackground />
      
      <div className="relative z-10">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-2xl font-bold text-gradient-gold">
              Hatra Suci
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate('/about')} className="text-sm hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => navigate('/ceo')} className="text-sm hover:text-primary transition-colors">
                CEO
              </button>
              <button onClick={() => navigate('/contact')} className="text-sm hover:text-primary transition-colors">
                Contact
              </button>
              <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="gold" size="sm" onClick={() => navigate('/register')}>
                Register
              </Button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
              <div className="flex flex-col p-4 space-y-3">
                <button 
                  onClick={() => { navigate('/about'); setMobileMenuOpen(false); }} 
                  className="text-left px-4 py-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => { navigate('/ceo'); setMobileMenuOpen(false); }} 
                  className="text-left px-4 py-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  CEO
                </button>
                <button 
                  onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }} 
                  className="text-left px-4 py-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  Contact
                </button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                >
                  Login
                </Button>
                <Button 
                  variant="gold" 
                  className="w-full justify-start"
                  onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                >
                  Register
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center pt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gradient-gold mb-4 tracking-wider">Hatra Suci</h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4">Indonesia's Trusted Global Enterprise</p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              A diversified Indonesia-based conglomerate and digital technology provider, operating across natural resources, global trade, and blockchain-powered financial technology.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-12">
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => navigate('/register')}
                className="group w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/login')}
                className="w-full sm:w-auto"
              >
                Login
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 sm:p-4">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gradient-gold">20+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 sm:p-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gradient-gold">15+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 sm:p-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gradient-gold">50K+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 sm:p-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gradient-gold">$10M+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Rewards Paid</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Industries Section */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-gradient-gold">Our Core Industries</h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Operating across traditional and digital sectors with sustainable practices and innovative solutions
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl p-5 sm:p-6 card-glow hover:border-primary transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Palm Oil</h3>
                <p className="text-sm text-muted-foreground">Sustainable plantation management and eco-friendly production</p>
              </div>

              <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl p-5 sm:p-6 card-glow hover:border-primary transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Gem className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Diamond Mining</h3>
                <p className="text-sm text-muted-foreground">Ethical mining operations with environmental compliance</p>
              </div>

              <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl p-5 sm:p-6 card-glow hover:border-primary transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Trade</h3>
                <p className="text-sm text-muted-foreground">International export-import network with full logistics</p>
              </div>

              <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-xl p-5 sm:p-6 card-glow hover:border-primary transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Blockchain Finance</h3>
                <p className="text-sm text-muted-foreground">Secure USDT platform with daily rewards system</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-20 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient-gold">Why Choose Hatra Suci</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Trusted & Secure</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">20+ years of ethical operations with full transparency and blockchain security</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Sustainable Practice</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">Committed to eco-friendly production and responsible resource management</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">Millions paid in rewards with a growing global community of satisfied users</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">Ready to Start Earning?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Join thousands of members earning daily rewards with Hatra Suci Investment & Rewards Platform
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="gold" 
                  size="lg"
                  onClick={() => navigate('/register')}
                  className="w-full sm:w-auto"
                >
                  Create Account
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gradient-gold mb-4">Hatra Suci</h3>
                <p className="text-sm text-muted-foreground">
                  Indonesia's trusted global enterprise in natural resources and blockchain finance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2">
                  <button onClick={() => navigate('/about')} className="block text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </button>
                  <button onClick={() => navigate('/ceo')} className="block text-sm text-muted-foreground hover:text-primary">
                    Leadership
                  </button>
                  <button onClick={() => navigate('/contact')} className="block text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <div className="space-y-2">
                  <button onClick={() => navigate('/login')} className="block text-sm text-muted-foreground hover:text-primary">
                    Login
                  </button>
                  <button onClick={() => navigate('/register')} className="block text-sm text-muted-foreground hover:text-primary">
                    Register
                  </button>
                  <button onClick={() => navigate('/dashboard')} className="block text-sm text-muted-foreground hover:text-primary">
                    Dashboard
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Jakarta, Indonesia</p>
                  <p>support@hatrasuci.co.id</p>
                  <a href="https://t.me/HatraSuciSupport" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                    Telegram Support
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2025 Hatra Suci. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
