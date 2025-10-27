import { useMemo, useState } from 'react';
import { Heart, Home, Calendar, MessageCircle, User as UserIcon, Search, Pill, Stethoscope, Star, ChevronRight, MapPin, Building2, ClipboardList, PhoneCall, Video, Bell } from 'lucide-react';

const doctorsSeed = [
  { id: '1', name: 'Dr. Sarah Raj', dept: 'Cardiology', rating: 4.8, avatar: 'https://i.pravatar.cc/100?img=47' },
  { id: '2', name: 'Dr. Aman Verma', dept: 'Orthopedics', rating: 4.6, avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: '3', name: 'Dr. Neha Kapoor', dept: 'Pediatrics', rating: 4.7, avatar: 'https://i.pravatar.cc/100?img=32' },
  { id: '4', name: 'Dr. Vikram S.', dept: 'Dermatology', rating: 4.5, avatar: 'https://i.pravatar.cc/100?img=5' },
];

const medsSeed = [
  { id: 'm1', name: 'Paracetamol', dose: '500mg', time: '8:00 AM' },
  { id: 'm2', name: 'Amoxicillin', dose: '250mg', time: '1:00 PM' },
  { id: 'm3', name: 'Cetirizine', dose: '10mg', time: '9:00 PM' },
];

const hospitalsSeed = [
  { id: 'h1', name: 'CityCare Hospital', location: 'Downtown', image: 'https://images.unsplash.com/photo-1616526628217-c21fd2eef624?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbW94aWNpbGxpbnxlbnwwfDB8fHwxNzYxNTkwODI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'h2', name: 'Green Valley Clinic', location: 'Northside', image: 'https://images.unsplash.com/photo-1580281657527-47d36b5f8f5f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'h3', name: 'Sunrise Health Center', location: 'East End', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
];

const pharmaciesSeed = [
  { id: 'p1', name: 'Wellness Pharmacy', location: 'Main Street', image: 'https://images.unsplash.com/photo-1724632824319-4b43e74e000c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmVlbiUyMFZhbGxleSUyMENsaW5pY3xlbnwwfDB8fHwxNzYxNTkwODI2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'p2', name: 'CarePlus Pharma', location: 'Market Square', image: 'https://images.unsplash.com/photo-1709085783594-666111a690d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW5yaXNlJTIwSGVhbHRoJTIwQ2VudGVyfGVufDB8MHx8fDE3NjE1OTA4MjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'p3', name: 'VitalMed Store', location: 'West Park', image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWxsbmVzcyUyMFBoYXJtYWN5fGVufDB8MHx8fDE3NjE1OTA4Mjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

export default function Dashboard({ user, activeTab, setActiveTab }) {
  const [favoriteDoctors, setFavoriteDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointment, setAppointment] = useState({ name: user?.name || '', dob: '', mobile: '', blood: '', gender: '', problem: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(null);

  const filteredDoctors = useMemo(() => {
    if (!searchQuery) return doctorsSeed;
    return doctorsSeed.filter(d => `${d.name} ${d.dept}`.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const toggleFavorite = (id) => {
    setFavoriteDoctors(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const resetFlow = () => {
    setSelectedDoctor(null);
    setAppointment({ name: user?.name || '', dob: '', mobile: '', blood: '', gender: '', problem: '' });
    setSelectedHospital(null);
  };

  return (
    <div className="flex-1">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-slate-900 font-bold">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <p className="text-sm text-slate-400">Welcome</p>
              <h3 className="text-base font-semibold text-white">{user?.name || 'Guest'}</h3>
            </div>
          </div>
          <div className="hidden gap-3 md:flex">
            <button className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${activeTab==='home'?'bg-white/10 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`} onClick={() => setActiveTab('home')}><Home size={16}/>Home</button>
            <button className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${activeTab==='schedule'?'bg-white/10 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`} onClick={() => setActiveTab('schedule')}><Calendar size={16}/>Schedule</button>
            <button className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${activeTab==='chat'?'bg-white/10 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`} onClick={() => setActiveTab('chat')}><MessageCircle size={16}/>Chat</button>
            <button className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${activeTab==='profile'?'bg-white/10 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`} onClick={() => setActiveTab('profile')}><UserIcon size={16}/>Profile</button>
          </div>
        </div>
      </header>

      {activeTab === 'home' && (
        <main className="mx-auto max-w-6xl px-6 py-6">
          <div className="relative mb-6">
            <div className="pointer-events-auto relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Search size={18} className="text-slate-300" />
              <input
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                placeholder="Find Doctor/Clinic/Medicine"
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
              />
            </div>
          </div>

          <section className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-lg font-semibold">Checklist Today</h4>
              <a className="text-sm text-emerald-300 hover:text-emerald-200" href="#checklist">View all</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {medsSeed.map((m) => (
                <div key={m.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500/90">
                      <Pill className="text-slate-900" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{m.name}</p>
                      <p className="text-xs text-slate-400">{m.dose} • {m.time}</p>
                    </div>
                  </div>
                  <button className="text-sm text-emerald-300 hover:text-emerald-200">Details</button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-lg font-semibold">Doctors Available</h4>
              <button onClick={() => setActiveTab('doctors')} className="text-sm text-emerald-300 hover:text-emerald-200">See all</button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {filteredDoctors.map((d) => (
                <div key={d.id} className="min-w-[240px] rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between">
                    <img src={d.avatar} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
                    <button onClick={() => toggleFavorite(d.id)} className={`rounded-full p-2 ${favoriteDoctors.includes(d.id) ? 'text-rose-400' : 'text-slate-300 hover:text-white'}` }>
                      <Heart size={18} fill={favoriteDoctors.includes(d.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium text-white">{d.name}</p>
                    <p className="text-xs text-slate-400">{d.dept}</p>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300">
                      <Star size={14} className="text-amber-300" /> {d.rating}
                    </div>
                  </div>
                  <button onClick={() => { setSelectedDoctor(d); setActiveTab('doctor'); }} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                    View Profile <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {activeTab === 'doctors' && (
        <main className="mx-auto max-w-6xl px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Doctors Available</h3>
            <button onClick={() => setActiveTab('home')} className="text-sm text-slate-300 hover:text-white">Back</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctorsSeed.map((d) => (
              <div key={d.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <img src={d.avatar} alt={d.name} className="h-16 w-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-white">{d.name}</p>
                        <p className="text-xs text-slate-400">{d.dept}</p>
                      </div>
                      <button onClick={() => toggleFavorite(d.id)} className={`rounded-full p-2 ${favoriteDoctors.includes(d.id) ? 'text-rose-400' : 'text-slate-300 hover:text-white'}` }>
                        <Heart size={18} fill={favoriteDoctors.includes(d.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300">
                      <Star size={14} className="text-amber-300" /> {d.rating}
                    </div>
                    <button onClick={() => { setSelectedDoctor(d); setActiveTab('doctor'); }} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                      View Profile <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'doctor' && selectedDoctor && (
        <main className="mx-auto max-w-5xl px-6 py-6">
          <button onClick={() => setActiveTab('doctors')} className="mb-4 text-sm text-slate-300 hover:text-white">Back to doctors</button>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
              <div className="flex items-center gap-4">
                <img src={selectedDoctor.avatar} alt={selectedDoctor.name} className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{selectedDoctor.name}</h3>
                  <p className="text-sm text-slate-300">{selectedDoctor.dept}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h4 className="mb-3 text-lg font-semibold">Schedule</h4>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead className="bg-white/5 text-slate-300">
                      <tr>
                        <th className="px-4 py-2 text-left">Day</th>
                        <th className="px-4 py-2 text-left">Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Mon','Tue','Wed','Thu','Fri'].map((day, i) => (
                        <tr key={day} className={i%2? 'bg-white/0':'bg-white/5'}>
                          <td className="px-4 py-2">{day}</td>
                          <td className="px-4 py-2">10:00 - 13:00, 16:00 - 18:30</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6">
                  <h4 className="mb-2 text-lg font-semibold">About Doctor</h4>
                  <p className="text-sm leading-6 text-slate-300">Experienced specialist with a patient-first approach, leveraging modern diagnostics and evidence-based care. Rated highly for communication and outcome-driven treatment plans.</p>
                </div>
                <div className="mt-4">
                  <h4 className="mb-2 text-lg font-semibold">Reviews</h4>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                    "+ Great experience, precise diagnosis and kind approach."
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-3 text-lg font-semibold">Book an appointment</h4>
                  <button onClick={() => setActiveTab('appointment')} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                    Schedule with {selectedDoctor.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {activeTab === 'appointment' && (
        <main className="mx-auto max-w-3xl px-6 py-6">
          <button onClick={() => setActiveTab('doctor')} className="mb-4 text-sm text-slate-300 hover:text-white">Back to profile</button>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-semibold">Book Appointment</h3>
            <form className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input value={appointment.name} onChange={(e)=>setAppointment({...appointment,name:e.target.value})} className="field" placeholder="Your full name" />
              </Field>
              <Field label="DOB">
                <input type="date" value={appointment.dob} onChange={(e)=>setAppointment({...appointment,dob:e.target.value})} className="field" />
              </Field>
              <Field label="Mobile">
                <input type="tel" value={appointment.mobile} onChange={(e)=>setAppointment({...appointment,mobile:e.target.value})} className="field" placeholder="(555) 123-4567" />
              </Field>
              <Field label="Blood Group">
                <select value={appointment.blood} onChange={(e)=>setAppointment({...appointment,blood:e.target.value})} className="field">
                  <option value="">Select</option>
                  {['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(b=> (<option key={b} value={b}>{b}</option>))}
                </select>
              </Field>
              <Field label="Gender">
                <select value={appointment.gender} onChange={(e)=>setAppointment({...appointment,gender:e.target.value})} className="field">
                  <option value="">Select</option>
                  {['Male','Female','Other'].map(g=> (<option key={g} value={g}>{g}</option>))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Write your problem">
                  <textarea value={appointment.problem} onChange={(e)=>setAppointment({...appointment,problem:e.target.value})} className="field" rows={4} placeholder="Describe your symptoms" />
                </Field>
              </div>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setActiveTab('hospitals')} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"><Building2 size={16}/> Continue (Hospital)</button>
              <button onClick={() => setActiveTab('pharmacies')} className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-400"><Pill size={16}/> Continue (Pharmacy)</button>
            </div>
          </div>
        </main>
      )}

      {activeTab === 'hospitals' && (
        <main className="mx-auto max-w-6xl px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Hospital List</h3>
            <button onClick={() => setActiveTab('appointment')} className="text-sm text-slate-300 hover:text-white">Back</button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hospitalsSeed.map(h => (
              <div key={h.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={h.image} alt={h.name} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{h.name}</p>
                      <p className="text-xs text-slate-400 inline-flex items-center gap-1"><MapPin size={14}/> {h.location}</p>
                    </div>
                    <button className="text-slate-300 hover:text-rose-400"><Heart size={18}/></button>
                  </div>
                  <button onClick={() => { setSelectedHospital(h); alert(`Selected ${h.name}. Appointment request submitted!`); resetFlow(); setActiveTab('home'); }} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">Select</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'pharmacies' && (
        <main className="mx-auto max-w-6xl px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Pharmacy List</h3>
            <button onClick={() => setActiveTab('appointment')} className="text-sm text-slate-300 hover:text-white">Back</button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pharmaciesSeed.map(p => (
              <div key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={p.image} alt={p.name} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{p.name}</p>
                      <p className="text-xs text-slate-400 inline-flex items-center gap-1"><MapPin size={14}/> {p.location}</p>
                    </div>
                    <button className="text-slate-300 hover:text-rose-400"><Heart size={18}/></button>
                  </div>
                  <button onClick={() => { alert(`Selected ${p.name}. Prescription request sent!`); resetFlow(); setActiveTab('home'); }} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-400">Select</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'schedule' && (
        <main className="mx-auto max-w-4xl px-6 py-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-semibold">Upcoming Appointments</h3>
            <div className="rounded-xl border border-white/10 bg-white/0 p-4 text-sm text-slate-300">No appointments yet. Book from Doctors to get started.</div>
          </div>
        </main>
      )}

      {activeTab === 'chat' && (
        <main className="mx-auto max-w-4xl px-6 py-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-semibold">Messages</h3>
            <div className="rounded-xl border border-white/10 bg-white/0 p-4 text-sm text-slate-300">Your chats with doctors will appear here.</div>
          </div>
        </main>
      )}

      {activeTab === 'profile' && (
        <main className="mx-auto max-w-5xl px-6 py-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-2xl font-bold text-slate-900">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{user?.name || 'User'}</h4>
                  <p className="text-sm text-slate-400">Age: 29</p>
                  <button className="mt-2 text-sm text-emerald-300 hover:text-emerald-200">Edit profile</button>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="mb-2 font-semibold">Notifications</h5>
                <Toggle label="Message" icon={<MessageCircle size={16}/>} />
                <Toggle label="Call" icon={<PhoneCall size={16}/>} />
                <Toggle label="Video Call" icon={<Video size={16}/>} />
                <Toggle label="Reminders" icon={<Bell size={16}/>} />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Ongoing Checklist</h4>
                  <a className="text-sm text-emerald-300 hover:text-emerald-200" href="#">View details</a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {medsSeed.map(m => (
                    <div key={m.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/0 p-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500/90">
                          <ClipboardList className="text-slate-900" size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-white">{m.name}</p>
                          <p className="text-xs text-slate-400">{m.dose} • {m.time}</p>
                        </div>
                      </div>
                      <button className="text-sm text-emerald-300 hover:text-emerald-200">Details</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-3 text-lg font-semibold">Favorites</h4>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {doctorsSeed.filter(d=>favoriteDoctors.includes(d.id)).length === 0 && (
                    <p className="text-sm text-slate-400">No favorites yet. Tap the heart on a doctor to add them.</p>
                  )}
                  {doctorsSeed.filter(d=>favoriteDoctors.includes(d.id)).map(d => (
                    <div key={d.id} className="min-w-[220px] rounded-xl border border-white/10 bg-white/0 p-4">
                      <div className="flex items-center gap-3">
                        <img src={d.avatar} alt={d.name} className="h-10 w-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-medium text-white">{d.name}</p>
                          <p className="text-xs text-slate-400">{d.dept}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-slate-300">{label}</span>
      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">{children}</div>
    </label>
  );
}

function Toggle({ label, icon }) {
  const [on, setOn] = useState(true);
  return (
    <button onClick={()=>setOn(!on)} className={`mb-2 flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm ${on ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-white/10 bg-white/5 text-slate-300'}`}>
      <span className="inline-flex items-center gap-2">{icon} {label}</span>
      <span className={`h-5 w-9 rounded-full p-0.5 ${on ? 'bg-emerald-500/60' : 'bg-white/10'}`}>
        <span className={`block h-4 w-4 rounded-full bg-white transition ${on ? 'translate-x-4' : ''}`}></span>
      </span>
    </button>
  );
}
