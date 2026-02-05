import { TreePine } from 'lucide-react';

export default function Logo({ className = "w-auto h-8" }) {
  return (
    <span>
      <div className="flex items-center gap-2">
              <TreePine className="w-8 h-8 inline-block" />
              <span className="text-2xl inline-block font-bold">S
                <span className="inline-block relative">
                  <span className="absolute top-0 text-2xl">r</span>
                  <span className="text-emerald-300">p</span>
                </span>
            anieWLesie.pl
              </span>
            </div>
    </span>
  );
}
